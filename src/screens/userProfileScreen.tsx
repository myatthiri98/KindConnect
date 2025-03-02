import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '@redux/hooks';
import {dim} from '@utils/configdata';
import {fetchUser} from '@redux/thunks/userThunks';

// Base styles that don't depend on theme colors
const baseStyles = StyleSheet.create({
  container: {flex: 1},
  content: {padding: dim.spacing.xl},
  header: {alignItems: 'center', marginBottom: dim.spacing.xxl},
  avatar: {
    width: dim.avatar.lg,
    height: dim.avatar.lg,
    borderRadius: dim.borderRadius.circle,
    marginBottom: dim.spacing.lg,
  },
  section: {marginBottom: dim.spacing.xxl},
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: dim.spacing.xxl,
  },
  statItem: {alignItems: 'center'},
  badge: {
    alignItems: 'center',
    marginRight: dim.spacing.lg,
  },
  badgeIcon: {
    fontSize: dim.fontSize.xxl,
    marginBottom: dim.spacing.xs,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function UserProfileScreen() {
  // Get data from Redux store
  const colors = useAppSelector(state => state.colors);
  const {name, avatar, location, bio, stats, badges, isLoading, error} =
    useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  // Fetch user data when component mounts
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // Create theme-dependent styles using Redux colors
  const themeStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.ui.secondaryBackground,
    },
    name: {
      fontSize: dim.fontSize.xl,
      fontWeight: dim.fontWeight.bold,
      color: colors.text.title,
      marginBottom: dim.spacing.xs,
    },
    location: {
      fontSize: dim.fontSize.md,
      color: colors.text.subTitle,
      marginBottom: dim.spacing.lg,
    },
    editButton: {
      paddingHorizontal: dim.button.paddingHorizontal.md,
      paddingVertical: dim.button.paddingVertical.sm,
      borderRadius: dim.borderRadius.lg,
      backgroundColor: colors.button.secondary.primary,
    },
    editButtonText: {
      color: colors.button.secondary.textInActive,
      fontSize: dim.fontSize.sm,
      fontWeight: dim.fontWeight.semiBold,
    },
    sectionTitle: {
      fontSize: dim.fontSize.lg,
      fontWeight: dim.fontWeight.semiBold,
      color: colors.text.title,
      marginBottom: dim.spacing.md,
    },
    bio: {
      fontSize: dim.fontSize.md,
      color: colors.text.subTitle,
      lineHeight: dim.lineHeight.md,
    },
    statNumber: {
      fontSize: dim.fontSize.xl,
      fontWeight: dim.fontWeight.bold,
      color: colors.button.secondary.primary,
      marginBottom: dim.spacing.xs,
    },
    statLabel: {
      fontSize: dim.fontSize.sm,
      color: colors.text.cardSubTitle,
    },
    badgeName: {
      fontSize: dim.fontSize.xs,
      color: colors.text.cardSubTitle,
      textAlign: 'center',
    },
    settingsButton: {
      backgroundColor: colors.brand.primary,
      padding: dim.spacing.lg,
      borderRadius: dim.borderRadius.sm,
      alignItems: 'center',
    },
    settingsButtonText: {
      color: colors.text.subTitle,
      fontSize: dim.fontSize.md,
      fontWeight: dim.fontWeight.semiBold,
    },
    errorText: {
      color: colors.error,
      fontSize: dim.fontSize.md,
      textAlign: 'center',
      padding: dim.spacing.lg,
    },
  });

  // Show loading indicator
  if (isLoading) {
    return (
      <SafeAreaView style={[baseStyles.container, themeStyles.container]}>
        <View style={baseStyles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color={colors.button.secondary.primary}
          />
          <Text style={themeStyles.bio}>Loading profile...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Show error message
  if (error) {
    return (
      <SafeAreaView style={[baseStyles.container, themeStyles.container]}>
        <View style={baseStyles.loadingContainer}>
          <Text style={themeStyles.errorText}>Error: {error}</Text>
          <TouchableOpacity
            style={themeStyles.editButton}
            onPress={() => dispatch(fetchUser())}>
            <Text style={themeStyles.editButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[baseStyles.container, themeStyles.container]}>
      <ScrollView contentContainerStyle={baseStyles.content}>
        {/* Profile Header */}
        <View style={baseStyles.header}>
          <Image source={{uri: avatar}} style={baseStyles.avatar} />
          <Text style={themeStyles.name}>{name}</Text>
          <Text style={themeStyles.location}>{location}</Text>
          <TouchableOpacity
            style={themeStyles.editButton}
            onPress={() => {
              // Replace console.log with a comment to avoid linting warning
              // console.log('Edit profile pressed')
            }}>
            <Text style={themeStyles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Bio Section */}
        <View style={baseStyles.section}>
          <Text style={themeStyles.sectionTitle}>About Me</Text>
          <Text style={themeStyles.bio}>{bio}</Text>
        </View>

        {/* Stats Section */}
        <View style={baseStyles.statsContainer}>
          {Object.entries(stats).map(([key, value]) => (
            <View key={key} style={baseStyles.statItem}>
              <Text style={themeStyles.statNumber}>{value}</Text>
              <Text style={themeStyles.statLabel}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </Text>
            </View>
          ))}
        </View>

        {/* Badges Section */}
        <View style={baseStyles.section}>
          <Text style={themeStyles.sectionTitle}>Badges Earned</Text>
          <FlatList
            data={badges}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => (
              <View style={baseStyles.badge}>
                <Text style={baseStyles.badgeIcon}>{item.icon}</Text>
                <Text style={themeStyles.badgeName}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        {/* Settings Button */}
        <TouchableOpacity
          style={themeStyles.settingsButton}
          onPress={() => {
            // Replace console.log with a comment to avoid linting warning
            // console.log('Settings pressed')
          }}>
          <Text style={themeStyles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserProfileScreen;
